# Change Log

## [1.5.2] 2023-05-23

- Update dependencies
- Fix issues

## [1.5.1] 2021-07-19

- Update the dependencies
- Migration to React 18
- Migration to sass from node-sass

## [1.5.0] 2021-05-20

### Bug fixing

### Major style changes

### Deleted components

### Added components

### Deleted dependencies

- `history` (no longer needed due to the `BrowserRouter`)
- `react-google-maps` (no longer maintained, so we'll use simple Google Maps API)
- `@types/googlemaps`
- `@types/markerclustererplus`
- `@types/react`

### Added dependencies

- `@babel/core@7.14.3` (to stop warnings on install)

### Updated dependencies

```
bootstrap                    4.5.0   →    4.6.0
chart.js                     2.9.3   →    3.2.1
gulp-append-prepend          1.0.8   →    1.0.9
node-sass                   4.14.1   →    6.0.0
perfect-scrollbar            1.5.0   →    1.5.1
react                      16.13.1   →   17.0.2
react-chartjs-2              2.9.0   →    3.0.3
react-dom                  16.13.1   →   17.0.2
react-notification-alert    0.0.12   →   0.0.13
react-scripts                3.4.1   →    4.0.3
reactstrap                   8.4.1   →    8.9.0
jquery                       3.5.1   →    3.6.0
typescript                   3.9.5   →    4.2.4
```

### Warning

_We will update Bootstrap to v5 when we'll release a new design for the Now UI products._
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_You will also have the following message: found 80 vulnerabilities (1 low, 79 moderate). This comes from react-scripts, and will be fixed in the next version. NOTE: the product works as expected with these vulnerabilities._

## [1.4.0] 2020-06-15

### Bug fixing

- Changed all `jsx` files to `js` ones
- Run prettier on all files, so there might be changes due to this
- https://github.com/creativetimofficial/now-ui-dashboard-react/issues/10
- Other Now UI React products:
  - https://github.com/creativetimofficial/ct-now-ui-dashboard-pro-react/issues/31 (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
  - https://github.com/creativetimofficial/ct-now-ui-dashboard-pro-react/issues/10 (add `scrollTop` inside the `Admin` layout)
  - https://github.com/creativetimofficial/ct-now-ui-kit-pro-react/issues/2 (added warnings on the documentation about this issue - unfortunately, we need to keep our own homepage prop inside the package.json for copyright issues)

### Major style changes

- `src/assets/scss/now-ui-dashboard/_variables.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)
- `src/assets/scss/now-ui-dashboard/_nucleo-outline.scss` (changed the fonts import to `~assets/fonts` and also added assets path inside `jsconfig.json` file)

### Deleted components

### Added components

### Deleted dependencies

### Added dependencies

- gulp@4.0.2 (for Creative Tim copyrights)
- gulp-append-prepend@1.0.8 (for Creative Tim copyrights)

### Updated dependencies

```
bootstrap             4.3.1   →     4.5.0
chart.js              2.8.0   →     2.9.3
history               4.9.0   →    4.10.1
node-sass            4.12.0   →    4.14.1
perfect-scrollbar     1.4.0   →     1.5.0
react                16.8.6   →   16.13.1
@types/react        16.8.19   →   16.9.36
react-chartjs-2       2.7.6   →     2.9.0
react-dom            16.8.6   →   16.13.1
react-router          5.0.0   →     5.2.0
react-router-dom      5.0.0   →     5.2.0
react-scripts         3.0.1   →     3.4.1
reactstrap            8.0.0   →     8.4.1
@types/googlemaps    3.36.2   →    3.39.6
jquery                3.4.1   →     3.5.1
typescript            3.5.1   →     3.9.5
```

### Warning

_All the following products: Now UI Kit React, Now UI Dashboard React, Now UI Kit PRO React and Now UI Dashboard PRO React have been updated together, and thus, we've added to all of them the same version of 1.4.0 - we may have skipped some versions for some of the above products, we've done so, since we want all Now UI & React products to share the same versions._
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

## [1.2.0] 2019-06-07

### Major changes

- Solved https://github.com/creativetimofficial/now-ui-dashboard-react/issues/1
- Solved https://github.com/creativetimofficial/now-ui-dashboard-react/issues/3
- Solved https://github.com/creativetimofficial/now-ui-dashboard-react/issues/4
- Solved https://github.com/creativetimofficial/now-ui-dashboard-react/issues/7
- Almost all of the styles inside `src/scss` have been changed
- We've removed `src/routes/*` files and replaced them with just one file (`src/routes.js`)
- We've renamed `src/layouts/Dashboard/Dashboard.jsx` to `src/layouts/Admin.jsx`
- We've dropped the usage of `NODE_PATH=./src` and the file `.env` with the `jsconfig.json` file for using absolute paths
- We've renamed `src/components/Header/Header.jsx` to `src/components/Navbars/DemoNavbar.jsx`
- We've renamed `src/views/Dashboard/Dashboard.jsx` to `src/views/Dashboard.jsx`
- We've renamed `src/views/Icons/Icons.jsx` to `src/views/Icons.jsx`
- We've renamed `src/views/Maps/Maps.jsx` to `src/views/Map.jsx`
- We've renamed `src/views/Notifications/Notifications.jsx` to `src/views/Notifications.jsx`
- We've renamed `src/views/TableList/TableList.jsx` to `src/views/TableList.jsx`
- We've renamed `src/views/Typography/Typography.jsx` to `src/views/Typography.jsx`
- We've renamed `src/views/UserPage/UserPage.jsx` to `src/views/UserPage.jsx`

### Dropped components

- `src/components/CardElements/*` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/CustomButton/CustomButton.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/CustomCheckbox/SimpleCheckbox.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/CustomRadio/CustomRadio.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/FormInputs/FormInputs.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/Stats/Stats.jsx` (replaced with simple HTML/React/Reactstrap syntax)
- `src/components/Tasks/Tasks.jsx` (replaced with simple HTML/React/Reactstrap syntax)

### Added components

- `src/components/FixedPlugin/FixedPlugin.jsx`

### Deleted dependencies

- All the optional and dev dependencies and replaced them with the Added dependencies, as optional ones

### Added dependencies

- jquery@3.4.1
- @types/googlemaps@3.36.2
- @types/react@16.8.19
- typescript@3.5.1
- @types/markerclustererplus@2.1.33

### Updated dependencies

```
bootstrap                   4.1.3   →    4.3.1
chart.js                    2.7.1   →    2.8.0
history                     4.7.2   →    4.9.0
node-sass                   4.9.3   →   4.12.0
react                      16.4.2   →   16.8.6
react-chartjs-2             2.7.4   →    2.7.6
react-dom                  16.4.2   →   16.8.6
react-notification-alert    0.0.8   →   0.0.12
react-router-dom            4.3.1   →    5.0.0
react-scripts               1.1.5   →    3.0.1
reactstrap                  6.4.0   →    8.0.0
```

## [1.1.0] 2018-08-31

### Bug fixing

- Github issues
  - https://github.com/creativetimofficial/now-ui-dashboard-react/issues/1
  - https://github.com/creativetimofficial/now-ui-dashboard-react/issues/4
- Added lint commands
- Added commands for creating a npmjs library

### Added dependencies

- `ajv v5.0.0` (to stop warning: **npm WARN ajv-keywords@2.1.1 requires a peer of ajv@^5.0.0 but none is installed. You must install peer dependencies yourself.**)
- `@types/googlemaps v3.30.12` (to stop warning: **npm WARN react-google-maps@9.4.5 requires a peer of @types/googlemaps@^3.0.0 but none is installed. You must install peer dependencies yourself.**)
- `@types/markerclustererplus v2.1.33` (to stop warning: **npm WARN react-google-maps@9.4.5 requires a peer of @types/markerclustererplus@^2.1.29 but none is installed. You must install peer dependencies yourself.**)
- `@types/react v16.4.12` (to stop warning: **npm WARN react-google-maps@9.4.5 requires a peer of @types/react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.**)

### Updated dependencies

- `bootstrap v4.0.0-beta` to `bootstrap v4.1.3`
- `chart.js v2.7.1` to `chart.js v2.7.2`
- `node-sass v4.6.1` to `node-sass v4.9.3`
- `node-sass-chokidar v0.0.3` to `node-sass-chokidar v1.3.3`
- `npm-run-all v4.1.1` to `npm-run-all v4.1.3`
- `perfect-scrollbar v1.3.0` to `perfect-scrollbar v1.4.0`
- `react v16.1.0` to `react v16.4.2`
- `react-chartjs-2 v2.7.0` to `react-chartjs-2 v2.7.4`
- `react-dom v16.1.0` to `react-dom v16.4.2`
- `react-google-maps v9.2.2` to `react-google-maps v9.4.5`
- `react-notification-alert v0.0.7` to `react-notification-alert v0.0.8`
- `react-router-dom v4.2.2` to `react-router-dom v4.3.1`
- `react-scripts v1.0.17` to `react-scripts v1.1.5`
- `reactstrap v5.0.0-alpha.4` to `reactstrap v6.4.0`

## [1.0.2] 2018-05-22

### Bug fixing

- Changed live preview and live documentation links
- Changed links from `http` to `https`

## [1.0.1] 2018-03-28

### Bug fixing

- Changed live preview and live documentation links
- Added `node-sass@4.6.1` as dependencie so that scss compiles without errors

## [1.0.0] 2018-02-22

### Original Release

- Added Reactstrap as base framework
- Added design from Now Ui Dashboard by Creative Tim
