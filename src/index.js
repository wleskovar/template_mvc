const engine_json= require('./model/engine_json');

function l (arg) {
    console.log(arg);
}

let nuevo= {package_id:"4",
            package_name:"San Juan",
            package_image:"Bariloche300x200.webp",
            package_alt_image:"San Juan",
            package_price:"50000",
            package_title:"San Juan en 3 días",
            package_q_days:"5",
            package_hotel:"Hotel Los Andes",
            package_stars_hotel:"4",
            package_description:"3 días al pie de los Andes, visitando el maravilloso Valle de la Luna",
            package_date_admission:"2022-05-20",
            package_index:"false",
            package_category:"1",
            package_transportation:"1",
            package_excursions_id:"0"
        };

//l(engine_json.browse_table('package'));
l(engine_json.read_columm('package',5));
/* Para dar el alta paso como parametros el nombre de la tabla y la nueva columna */
//engine_json.add_columm('package', nuevo);
//l('listo el alta');
//engine_json.delete_columm('package', 45);
//l('listo la baja');
//engine_json.edit_columm('package', 5, nuevo);
//l(engine_json.browse_table('package'));

// const {package_id: id , ...rest} = nuevo;
//l((Object.values(objeto)[0]));

