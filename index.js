// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function (driver) {
    return Object.assign({}, driver, { driver.toLowerCase(); })
  })
}