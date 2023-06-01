main();
function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return regeneratorRuntime.awrap(new Promise(resolve => {
          setTimeout(() => {
            console.log('hello, babel regenerator runtime');
            resolve();
          }, 1000);
        }));
      case 2:
      case "end":
        return _context.stop();
    }
  }, null, null, null, Promise);
}
