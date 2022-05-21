# Thesis FE

- `npm i axios styled-components` + `npm i -D @types/styled-components`

## Thoughts

- Login + Logout Implementation:
  - Client login will receive the sid + userId
  - save that to localStorage -> even if f5/refresh (aka not using RR) global app data is maintained

## Notes

- Pictures taken from: yle news and getty images
  - yle image ratio 3:2
- why most CPN has `className?: string` props
  - cause using `styled-components` -> internally passed `className` attribute to element for styling
  - check here: <https://styled-components.com/docs/api#caveat-with-classname>
- Public data that are available to whole app
  - user credentials
  - userAPI hooks for HTTP POST to different routes of BE
- Cookies + CORS pain:
  - <https://stackoverflow.com/a/39379524/8834000>
- Axios return data object:
