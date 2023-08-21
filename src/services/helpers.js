export function parseAdress(str) {
    return str.split(', ');
}

export function parseRentalConditions(str) {
    const rez = str.split('\n');
    const number = rez[0].slice(rez[0].lastIndexOf(' ') + 1, rez[0].length);

    rez[0] = rez[0].replace(number, '');
    rez.splice(1, 0, number);

    return rez;
}

export function parseMileage(number) {
    return new Intl.NumberFormat('en-US').format(number);
}

export const renderItems = items =>
    items.map((el, idx) => (
        <span className="card-info-tag" key={idx}>
            {el}
        </span>
    ));

export function getCarBrand(cars) {
    return cars
        .map(({ make }) => make)
        .filter((brand, idx, array) => array.indexOf(brand) === idx)
        .sort((a, b) => a.localeCompare(b));
}

export function getPrice(cars) {
    let max = 0;
    const rez = [];
    cars.forEach(car => {
        if (car.rentalPrice > max) {
            max = car.rentalPrice;
        }
    });

    let i = 10;
    while (i <= max) {
        rez.push(i);
        i += 10;
    }
    return rez;
}

export const filteredCars = (filter, allCars) => {
    if (!!filter) {
        const { brand, price, from, to } = filter;

        if (!brand && !price && !from && !to) {
            return allCars;
        }

        let rez;

        if (!!brand) {
            rez = allCars.filter(
                car => car.make.toLowerCase() === brand.toLowerCase()
            );
        }

        if (!!price) {
            let tmpArr;
            if (!!rez) {
                tmpArr = rez;
            } else {
                tmpArr = allCars;
            }
            rez = tmpArr.filter(car => car.rentalPrice <= price);
        }

        if (!!from && !!to) {
            const fromNumber = Number(from);
            const toNumber = Number(to);
            let tmpArr;
            if (!!rez) {
                tmpArr = rez;
            } else {
                tmpArr = allCars;
            }

            return tmpArr.filter(
                car => car.mileage >= fromNumber && car.mileage <= toNumber
            );
        } else {
            if (!!from) {
                const fromNumber = Number(from);
                let tmpArr;
                if (!!rez) {
                    tmpArr = rez;
                } else {
                    tmpArr = allCars;
                }
                return tmpArr.filter(car => car.mileage >= fromNumber);
            }
            if (!!to) {
                const toNumber = Number(to);
                let tmpArr;
                if (!!rez) {
                    tmpArr = rez;
                } else {
                    tmpArr = allCars;
                }
                return tmpArr.filter(car => toNumber >= car.mileage);
            }
        }

        return rez;
    }
    return allCars;
};
