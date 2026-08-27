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
      return getCompetitions(env);
    }

    return env.ASSETS.fetch(request);
  }
};

async function getCompetitions(env: Env): Promise<Response> {
  if (!env.FOOTBALL_DATA_API_KEY) {
    return Response.json(
      {
        error: 'Football data API is not configured.'
      },
      { status: 500 }
    );
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

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch {
    return Response.json(
      {
        error: 'Unable to reach the football data provider.'
      },
      { status: 502 }
    );
  }
}
