# test-random-ui-ux

Public UI lab. Overlay harness loads ThePlaceholderText home options in an iframe. This repo does **not** deploy [theplaceholdertext.com](https://theplaceholdertext.com/).

## Harness

- Floating hamburger (left) opens the example list.
- Prev / next switch examples. The frame is a separate document; harness scripts do not restyle it.
- Deep link: `/?e=tpt-03`

| Example | Treatment |
|---|---|
| tpt-01 | Control (current live layout) |
| tpt-02 | Larger wordmark, lower on the photo |
| tpt-03 | Larger, lower, moss-green wordmark |
| tpt-04 | Larger, lower, extra-bold white |
| tpt-05 | Larger, lower, split-tone wordmark |

## Promote

Cloud-only Done: GitHub Actions **Promote test-random-ui-ux** (`confirm_production=promote-production`). Worker name `test-random-ui-ux` on `workers.dev`.

Copy a winner into `joshdwall/theplaceholdersite-business` `public/index.html` + `public/theme/moss.css` by hand after you pick an example. Do not point this Worker at theplaceholdertext.com.
