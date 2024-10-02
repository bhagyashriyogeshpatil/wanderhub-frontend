// Import rest for mocking API requests
import { rest } from "msw";

const baseURL = 'https://wanderhub-api-backend-8af792a9ebf9.herokuapp.com/';

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
          ctx.json({
            pk: 3,
            username: "Shree",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 3,
            profile_image: "https://res.cloudinary.com/dssflljmx/image/upload/v1/media/images/lamb_1_oudtfv"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];