const GlobalController = {};
const ENV = import.meta.env;

const API_URL= `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`

GlobalController.getData = async () => {
  try {
    const res = await fetch(`${API_URL}/home`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    return await res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
}


export default GlobalController;

