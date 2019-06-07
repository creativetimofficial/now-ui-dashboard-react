# Change Log

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
+ jquery@3.4.1
+ @types/googlemaps@3.36.2
+ @types/react@16.8.19
+ typescript@3.5.1
+ @types/markerclustererplus@2.1.33
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
