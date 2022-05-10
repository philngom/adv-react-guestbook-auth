import fetch from 'cross-fetch';
global.fetch = fetch;
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.post(
    'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
    (req, res, ctx) =>
      res(
        ctx.json({
          access_token: 'MOCKED_ACCESS_TOKEN',
          token_type: 'bearer',
          expires_in: 3600,
          refresh_token: 'MOCKED_REFRESH_TOKEN',
          user: {
            id: '12345',
            aud: 'authenticated',
            role: 'authenticated',
            email: 'b@c.com',
            email_confirmed_at: '2022-05-10T17:40:21.100682Z',
            phone: '',
            confirmed_at: '2022-05-10T17:40:21.100682Z',
            last_sign_in_at: '2022-05-10T21:38:39.686531361Z',
            app_metadata: {
              provider: 'email',
              providers: ['email'],
            },
            user_metadata: {},
            identities: [
              {
                id: '12345',
                user_id: '12345',
                identity_data: {
                  sub: '12345',
                },
                provider: 'email',
                last_sign_in_at: '2022-05-10T17:40:21.098866Z',
                created_at: '2022-05-10T17:40:21.098908Z',
                updated_at: '2022-05-10T17:40:21.098911Z',
              },
            ],
            created_at: '2022-05-10T17:40:21.096427Z',
            updated_at: '2022-05-10T21:38:39.687648Z',
          },
        })
      )
  ),
  rest.get(
    'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
    (req, res, ctx) =>
      res(
        ctx.json([
          {
            id: 577,
            guest_id: 'df861deb-86b9-4f7d-996a-48b8bace54cc',
            content: 'b@c.com ---> second entry',
            created_at: '2022-05-10T18:28:02.931651+00:00',
          },
          {
            id: 576,
            guest_id: 'df861deb-86b9-4f7d-996a-48b8bace54cc',
            content: 'b@c.com--->first entry',
            created_at: '2022-05-10T18:24:49.95639+00:00',
          },
        ])
      )
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
