const xhttp = new XMLHttpRequest();
xhttp.open('GET', './data/someData.txt?t=' + Date.now(), true);
xhttp.send();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200){

        const parsedData = xhttp.response
            .trim()
            .split('\n')
            .map(line => line.split(','))
            .reduce( (obj, line)  => {
                obj[line[0]] = obj[line[0]] || [];
                obj[line[0]].push(
                    {
                        name    : line[1],
                        price   : line[2],
                        quantity: line[3]
                    }
                );
                return obj;
            } ,{})

            console.log(parsedData);
    }
};
