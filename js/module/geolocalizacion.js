const d = document,
  n = navigator;
export default function geolocalizacion(id) {
  const geoId = d.getElementById(id);
  n.geolocation.getCurrentPosition(
    (pos) => {
      const crd = pos.coords;

      console.log("Tu posicion actual es: \n");
      console.log(`Latitud: ${crd.latitude}`);
      console.log(`Longitud: ${crd.longitude}`);
      console.log(`Más o menos a:${crd.accuracy} metros`);
      geoId.innerHTML = `<ul>
        <li>Latitud: <b>${crd.latitude}</b></li>
        <li>Longitud: <b>${crd.longitude}</b></li>
        <li>Más o menos a: <b>${Number.parseFloat(crd.accuracy).toFixed(
          2
        )}</b> metros</li>
        </ul><br>
        <a href="https://www.google.com.mx/maps/@${crd.latitude},${
        crd.longitude
      },20z" target="_blank" rel="noopener">Ver mapa</a>`;
    },
    (err) => {
      console.log(`Error ${err.code}: ${err.message}`);
    },
    {
      enableHighAccuracy: true,
      // timeout: 5000,
      maximumAge: 0,
    }
  );
}
