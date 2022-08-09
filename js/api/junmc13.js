const $ = e=>document.querySelector(e)

$('body').innerHTML += `<style>
.card-aga{
  width: 48%;
  margin: 10px;
}
@media screen and (max-width:1130px){
  .card-aga{
    width: 47%;
    margin: 10px;
  }
}
@media screen and (max-width:700px){
  .card-aga{
    width: 100%;
    margin: 10px;
  }
}
</style>`

function load(callback) {
  let interval = setInterval(() => {
    callback()
    clearInterval(interval);
  }, 1);
}
load(()=>{
$('#data-aga').innerHTML += ` 
    <div class="card shadow mb-4 card-aga">
        <div class="card-body">
            <div class="col-lg-4 izquierda">
                <center>
                    <img src="https://adriancraft07.github.io/img/JunMC13/ChoesinCraft/icono.png" class="espacio-img" width="128px">
                </center>
            </div>
            <div class="col-lg-8 derecha">
                <center><h6 class="m-0 font-weight-bold text-primary">NOMBRE DEL ADDON (CREADO POR AGA)</h6><br>
                    <p><b>Creador:</b><span class="text-warning2"> AdrianCraft (Aga)</span></p>
                    <a href="LINK DE LA PÁGINA DE AGA" target="_blank">
                        <button class="btn btn-outline-primary btn-block">Descargar NOMBRE DEL ADDON</button>
                    </a>
                </center>
            </div>
        </div>
    </div>`
})
