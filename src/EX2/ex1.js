const getData = async (url) => {
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error(`HTTP error Status: ${resposta.status}`);
    }
    return await resposta.json();
  } catch (error) {
    console.error('No s’ha pogut obtenir dades de la API:', error);
  }
};

// getData(
//   'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/9663?nult=10'
// ).then((result) => console.log(result));

// https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/59057?nult=10

const getRentPrices = async () => {
  try {
    const resposta = await getData(
      'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/59057?nult=10'
    );
    const filtre = resposta.filter((item) => item.Nombre.includes('Cataluña. Total'));

    return filtre;
  } catch (error) {
    console.error('No s’ha pogut obtenir dades de la API:', error);
    return [];
  }
};
getRentPrices().then((result) => console.log(result));

const showRentPrices = (data) => {
    const divs = document.querySelectorAll('.contenidor > div');
    const ulElementVariacio = document.createElement('ul');
    const ulElementIndex = document.createElement('ul');

    data.forEach(element => {
      element.Data.forEach((item)=>{
        const liElement = document.createElement('li');

      if(element.Nombre.includes('Índice')){
        liElement.innerHTML = `<b>${item.Anyo} - ${item.Valor}</b>`;
        ulElementIndex.appendChild(liElement);
      }else if(element.Nombre.includes('Variación')){
        liElement.innerHTML = `<b>${item.Anyo} - ${item.Valor}</b>`;
        ulElementVariacio.appendChild(liElement);
      }
      });
    });
    divs[0].appendChild(ulElementIndex);
    divs[1].appendChild(ulElementVariacio);
};


const getIPC = async () => {
  try {
    const resposta = await getData(
      'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/50934?nult=10'
    );

    const selector = document.getElementById('ipc-selector');

    resposta.forEach((element)=>{
      const option = document.createElement('option');
      const nameParts = element.Nombre.split(".");
      const nameAfterFirstDot = nameParts.slice(1).join(".");
      option.value = nameAfterFirstDot;
      option.text = nameAfterFirstDot;
      selector.appendChild(option);
    });

    return resposta;
  } catch (error) {
    console.error('No s’ha pogut obtenir dades de la API:', error);
  }
};
getIPC().then((result) => console.log(result));

const showIPC = async () => {
  try {
    const data = await getIPC();
    const select = document.getElementById('ipc-selector');

    const IPCselected = select.value;
    let filtredData = data.find((element) => element.Nombre.includes(IPCselected));
    const labels = [];
    const values = [];

    filtredData.Data.forEach((item)=>{
      labels.push(item.Anyo);
      values.push(item.Valor);
    });
    labels.reverse();
    values.reverse();
    myChart(labels,values);
  } catch (error) {
    
  }
};

let chart = null; // Declarem una variable global per a guardar el gràfic

const myChart = (labels, data) => {
    console.log(labels, data)
    const ctx = document.getElementById('myChart').getContext('2d');
    if (chart) { // If a chart exists
        chart.destroy(); // Destroy it
    }
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Índex de Preus',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        },
        options: {}
    });
}
const main = async () => {
  try {
    const data = await getRentPrices();
    showRentPrices(data);
    showIPC()
    const select = document.getElementById('ipc-selector');
    select.addEventListener('change',showIPC);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
