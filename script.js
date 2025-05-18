const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', mass: 1.008, period: 1, group: 1 },
    { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', mass: 4.003, period: 1, group: 18 },
    { number: 3, symbol: 'Li', name: 'Lithium', category: 'metal', mass: 6.941, period: 2, group: 1 },
    { number: 4, symbol: 'Be', name: 'Beryllium', category: 'metal', mass: 9.012, period: 2, group: 2 },
    { number: 5, symbol: 'B', name: 'Boron', category: 'nonmetal', mass: 10.811, period: 2, group: 13 },
    { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', mass: 12.011, period: 2, group: 14 },
    { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', mass: 14.007, period: 2, group: 15 },
    { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', mass: 15.999, period: 2, group: 16 },
    { number: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', mass: 18.998, period: 2, group: 17 },
    { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', mass: 20.180, period: 2, group: 18 },
    { number: 11, symbol: 'Na', name: 'Sodium', category: 'metal', mass: 22.990, period: 3, group: 1 },
    { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'metal', mass: 24.305, period: 3, group: 2 },
    { number: 13, symbol: 'Al', name: 'Aluminum', category: 'metal', mass: 26.982, period: 3, group: 13 },
    { number: 14, symbol: 'Si', name: 'Silicon', category: 'nonmetal', mass: 28.086, period: 3, group: 14 },
    { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', mass: 30.974, period: 3, group: 15 },
    { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', mass: 32.065, period: 3, group: 16 },
    { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', mass: 35.453, period: 3, group: 17 },
    { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', mass: 39.948, period: 3, group: 18 },
    { number: 19, symbol: 'K', name: 'Potassium', category: 'metal', mass: 39.098, period: 4, group: 1 },
    { number: 20, symbol: 'Ca', name: 'Calcium', category: 'metal', mass: 40.078, period: 4, group: 2 },
    { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition', mass: 44.956, period: 4, group: 3 },
    { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition', mass: 47.867, period: 4, group: 4 },
    { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition', mass: 50.942, period: 4, group: 5 },
    { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition', mass: 51.996, period: 4, group: 6 },
    { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition', mass: 54.938, period: 4, group: 7 },
    { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition', mass: 55.845, period: 4, group: 8 },
    { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition', mass: 58.933, period: 4, group: 9 },
    { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition', mass: 58.693, period: 4, group: 10 },
    { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition', mass: 63.546, period: 4, group: 11 },
    { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition', mass: 65.380, period: 4, group: 12 },
    { number: 31, symbol: 'Ga', name: 'Gallium', category: 'metal', mass: 69.723, period: 4, group: 13 },
    { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metal', mass: 72.630, period: 4, group: 14 },
    { number: 33, symbol: 'As', name: 'Arsenic', category: 'nonmetal', mass: 74.922, period: 4, group: 15 },
    { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', mass: 78.971, period: 4, group: 16 },
    { number: 35, symbol: 'Br', name: 'Bromine', category: 'halogen', mass: 79.904, period: 4, group: 17 },
    { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', mass: 83.798, period: 4, group: 18 },
    { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'metal', mass: 85.468, period: 5, group: 1 },
    { number: 38, symbol: 'Sr', name: 'Strontium', category: 'metal', mass: 87.620, period: 5, group: 2 },
    { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition', mass: 88.906, period: 5, group: 3 },
    { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition', mass: 91.224, period: 5, group: 4 },
    { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition', mass: 92.906, period: 5, group: 5 },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition', mass: 95.950, period: 5, group: 6 },
    { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition', mass: 98.000, period: 5, group: 7 },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition', mass: 101.070, period: 5, group: 8 },
    { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition', mass: 102.906, period: 5, group: 9 },
    { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition', mass: 106.420, period: 5, group: 10 },
    { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition', mass: 107.868, period: 5, group: 11 },
    { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition', mass: 112.414, period: 5, group: 12 },
    { number: 49, symbol: 'In', name: 'Indium', category: 'metal', mass: 114.818, period: 5, group: 13 },
    { number: 50, symbol: 'Sn', name: 'Tin', category: 'metal', mass: 118.710, period: 5, group: 14 },
    { number: 51, symbol: 'Sb', name: 'Antimony', category: 'metal', mass: 121.760, period: 5, group: 15 },
    { number: 52, symbol: 'Te', name: 'Tellurium', category: 'nonmetal', mass: 127.600, period: 5, group: 16 },
    { number: 53, symbol: 'I', name: 'Iodine', category: 'halogen', mass: 126.904, period: 5, group: 17 },
    { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', mass: 131.293, period: 5, group: 18 },
    { number: 55, symbol: 'Cs', name: 'Cesium', category: 'metal', mass: 132.905, period: 6, group: 1 },
    { number: 56, symbol: 'Ba', name: 'Barium', category: 'metal', mass: 137.327, period: 6, group: 2 },
    { number: 57, symbol: 'La', name: 'Lanthanum', category: 'transition', mass: 138.905, period: 6, group: 3 },
    { number: 58, symbol: 'Ce', name: 'Cerium', category: 'transition', mass: 140.116, period: 6, group: 4 },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'transition', mass: 140.908, period: 6, group: 5 },
    { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'transition', mass: 144.242, period: 6, group: 6 },
    { number: 61, symbol: 'Pm', name: 'Promethium', category: 'transition', mass: 145.000, period: 6, group: 7 },
    { number: 62, symbol: 'Sm', name: 'Samarium', category: 'transition', mass: 150.360, period: 6, group: 8 },
    { number: 63, symbol: 'Eu', name: 'Europium', category: 'transition', mass: 151.964, period: 6, group: 9 },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'transition', mass: 157.250, period: 6, group: 10 },
    { number: 65, symbol: 'Tb', name: 'Terbium', category: 'transition', mass: 158.925, period: 6, group: 11 },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'transition', mass: 162.500, period: 6, group: 12 },
    { number: 67, symbol: 'Ho', name: 'Holmium', category: 'transition', mass: 164.930, period: 6, group: 13 },
    { number: 68, symbol: 'Er', name: 'Erbium', category: 'transition', mass: 167.259, period: 6, group: 14 },
    { number: 69, symbol: 'Tm', name: 'Thulium', category: 'transition', mass: 168.934, period: 6, group: 15 },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'transition', mass: 173.054, period: 6, group: 16 },
    { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'transition', mass: 174.967, period: 6, group: 17 },
    { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition', mass: 178.490, period: 6, group: 4 },
    { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition', mass: 180.948, period: 6, group: 5 },
    { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition', mass: 183.840, period: 6, group: 6 },
    { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition', mass: 186.207, period: 6, group: 7 },
    { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition', mass: 190.230, period: 6, group: 8 },
    { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition', mass: 192.217, period: 6, group: 9 },
    { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition', mass: 195.084, period: 6, group: 10 },
    { number: 79, symbol: 'Au', name: 'Gold', category: 'transition', mass: 196.967, period: 6, group: 11 },
    { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition', mass: 200.592, period: 6, group: 12 },
    { number: 81, symbol: 'Tl', name: 'Thallium', category: 'metal', mass: 204.380, period: 6, group: 13 },
    { number: 82, symbol: 'Pb', name: 'Lead', category: 'metal', mass: 207.200, period: 6, group: 14 },
    { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'metal', mass: 208.980, period: 6, group: 15 },
    { number: 84, symbol: 'Po', name: 'Polonium', category: 'metal', mass: 209.000, period: 6, group: 16 },
    { number: 85, symbol: 'At', name: 'Astatine', category: 'halogen', mass: 210.000, period: 6, group: 17 },
    { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', mass: 222.000, period: 6, group: 18 },
    { number: 87, symbol: 'Fr', name: 'Francium', category: 'metal', mass: 223.000, period: 7, group: 1 },
    { number: 88, symbol: 'Ra', name: 'Radium', category: 'metal', mass: 226.000, period: 7, group: 2 },
    { number: 89, symbol: 'Ac', name: 'Actinium', category: 'transition', mass: 227.000, period: 7, group: 3 },
    { number: 90, symbol: 'Th', name: 'Thorium', category: 'transition', mass: 232.038, period: 7, group: 4 },
    { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'transition', mass: 231.036, period: 7, group: 5 },
    { number: 92, symbol: 'U', name: 'Uranium', category: 'transition', mass: 238.029, period: 7, group: 6 },
    { number: 93, symbol: 'Np', name: 'Neptunium', category: 'transition', mass: 237.000, period: 7, group: 7 },
    { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'transition', mass: 244.000, period: 7, group: 8 },
    { number: 95, symbol: 'Am', name: 'Americium', category: 'transition', mass: 243.000, period: 7, group: 9 },
    { number: 96, symbol: 'Cm', name: 'Curium', category: 'transition', mass: 247.000, period: 7, group: 10 },
    { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'transition', mass: 247.000, period: 7, group: 11 },
    { number: 98, symbol: 'Cf', name: 'Californium', category: 'transition', mass: 251.000, period: 7, group: 12 },
    { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'transition', mass: 252.000, period: 7, group: 13 },
    { number: 100, symbol: 'Fm', name: 'Fermium', category: 'transition', mass: 257.000, period: 7, group: 14 },
    { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'transition', mass: 258.000, period: 7, group: 15 },
    { number: 102, symbol: 'No', name: 'Nobelium', category: 'transition', mass: 259.000, period: 7, group: 16 },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'transition', mass: 262.000, period: 7, group: 17 },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition', mass: 267.000, period: 7, group: 4 },
    { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition', mass: 268.000, period: 7, group: 5 },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition', mass: 269.000, period: 7, group: 6 },
    { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition', mass: 270.000, period: 7, group: 7 },
    { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition', mass: 269.000, period: 7, group: 8 },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition', mass: 278.000, period: 7, group: 9 },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition', mass: 281.000, period: 7, group: 10 },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition', mass: 282.000, period: 7, group: 11 },
    { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition', mass: 285.000, period: 7, group: 12 },
    { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'metal', mass: 286.000, period: 7, group: 13 },
    { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'metal', mass: 289.000, period: 7, group: 14 },
    { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'metal', mass: 290.000, period: 7, group: 15 },
    { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'metal', mass: 293.000, period: 7, group: 16 },
    { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'halogen', mass: 294.000, period: 7, group: 17 },
    { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', mass: 294.000, period: 7, group: 18 }
];
function createPeriodicTable() {
    const table = document.getElementById('periodicTable');
    const lanthanideSeries = document.getElementById('lanthanideSeries');
    const actinideSeries = document.getElementById('actinideSeries');
    for (let period = 1; period <= 7; period++) {
        for (let group = 1; group <= 18; group++) {
            const element = elements.find(e => {
                if ((e.number >= 57 && e.number <= 71) || (e.number >= 89 && e.number <= 103)) {
                    return false;
                }
                return e.period === period && e.group === group;
            });
            
            const cell = document.createElement('div');
            
            if (element) {
                cell.className = `element ${element.category.toLowerCase()}`;
                cell.innerHTML = `
                    <div class="atomic-number">${element.number}</div>
                    <div class="symbol">${element.symbol}</div>
                    <div class="name">${element.name}</div>
                `;
                cell.addEventListener('click', () => showElementDetails(element));
            } else {
                if ((period === 6 && group === 3)) {
                    cell.className = 'element lanthanide-placeholder';
                    cell.innerHTML = 'La-Lu';
                } else if ((period === 7 && group === 3)) {
                    cell.className = 'element actinide-placeholder';
                    cell.innerHTML = 'Ac-Lr';
                } else {
                    cell.className = 'element empty';
                }
            }
            
            table.appendChild(cell);
        }
    }

    elements
        .filter(e => e.number >= 57 && e.number <= 71)
        .forEach(element => {
            const cell = document.createElement('div');
            cell.className = `element lanthanide`;
            cell.innerHTML = `
                <div class="atomic-number">${element.number}</div>
                <div class="symbol">${element.symbol}</div>
                <div class="name">${element.name}</div>
            `;
            cell.addEventListener('click', () => showElementDetails(element));
            lanthanideSeries.appendChild(cell);
        });

    elements
        .filter(e => e.number >= 89 && e.number <= 103)
        .forEach(element => {
            const cell = document.createElement('div');
            cell.className = `element actinide`;
            cell.innerHTML = `
                <div class="atomic-number">${element.number}</div>
                <div class="symbol">${element.symbol}</div>
                <div class="name">${element.name}</div>
            `;
            cell.addEventListener('click', () => showElementDetails(element));
            actinideSeries.appendChild(cell);
        });

    initializeFilters();
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const elements = document.querySelectorAll('.element:not(.empty):not(.lanthanide-placeholder):not(.actinide-placeholder)');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
     
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            elements.forEach(element => {
                if (category === 'all') {
                    element.style.opacity = '1';
                    element.style.pointerEvents = 'auto';
                } else {
                    if (element.classList.contains(category)) {
                        element.style.opacity = '1';
                        element.style.pointerEvents = 'auto';
                    } else {
                        element.style.opacity = '0.2';
                        element.style.pointerEvents = 'none';
                    }
                }
            });
        });
    });
}

function showElementDetails(element) {
    document.getElementById('elementName').textContent = element.name;
    document.getElementById('elementSymbol').textContent = element.symbol;
    document.getElementById('elementNumber').textContent = element.number;
    document.getElementById('elementMass').textContent = element.mass;
    document.getElementById('elementCategory').textContent = element.category.toUpperCase();
    document.getElementById('elementPeriod').textContent = element.period;
    document.getElementById('elementGroup').textContent = element.group;
}

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
