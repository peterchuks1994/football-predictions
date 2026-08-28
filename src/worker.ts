interface Env {
  ASSETS: Fetcher;
  FOOTBALL_DATA_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return Response.json({
        status: 'ok',
        service: 'MatchMetric API'
      });
    }

    if (url.pathname === '/api/competitions') {
      return getCompetitions(request, env);
    }

    if (url.pathname === '/api/matches') {
      return getMatches(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};

async function getCompetitions(
  request: Request,
  env: Env
): Promise<Response> {
  if (!env.FOOTBALL_DATA_API_KEY) {
    return Response.json(
      {
        error: 'Football data API is not configured.'
      },
      { status: 500 }
    );
  }

  const cache = caches.default;
  const cacheKey = new Request(request.url);

  const cached = await cache.match(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(
      'https://api.football-data.org/v4/competitions/',
      {
        headers: {
          'X-Auth-Token': env.FOOTBALL_DATA_API_KEY
        }
      }
    );

    if (!response.ok) {
      return Response.json(
        {
          error: 'Football data provider returned an error.',
          status: response.status
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    const result = new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });

    await cache.put(cacheKey, result.clone());

    return result;
  } catch {
    return Response.json(
      {
        error: 'Unable to reach the football data provider.'
      },
      { status: 502 }
    );
  }
}

async function getMatches(
  request: Request,
  env: Env
): Promise<Response> {
  if (!env.FOOTBALL_DATA_API_KEY) {
    return Response.json(
      {
        error: 'Football data API is not configured.'
      },
      { status: 500 }
    );
  }

  const url = new URL(request.url);
  const competition = url.searchParams.get('competition');

  if (!competition) {
    return Response.json(
      {
        error: 'Missing competition parameter.'
      },
      { status: 400 }
    );
  }

  const dateFrom = url.searchParams.get('dateFrom');
  const dateTo = url.searchParams.get('dateTo');

  const apiUrl = new URL(
    'https://api.football-data.org/v4/competitions/' +
      encodeURIComponent(competition) +
      '/matches'
  );

  if (dateFrom) {
    apiUrl.searchParams.set('dateFrom', dateFrom);
  }

  if (dateTo) {
    apiUrl.searchParams.set('dateTo', dateTo);
  }

  const cache = caches.default;
  const cacheKey = new Request(request.url);

  const cached = await cache.match(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(apiUrl.toString(), {
      headers: {
        'X-Auth-Token': env.FOOTBALL_DATA_API_KEY
      }
    });

    if (!response.ok) {
      return Response.json(
        {
          error: 'Football data provider returned an error.',
          status: response.status
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    const result = new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800'
      }
    });

    await cache.put(cacheKey, result.clone());

    return result;
  } catch {
    return Response.json(
      {
        error: 'Unable to reach the football data provider.'
      },
      { status: 502 }
    );
  }
}
