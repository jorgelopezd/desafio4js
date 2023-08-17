const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
  const inputs = Array.from(document.querySelector ("nav"));
  const btn = document.querySelector("nav button");
  const propiedadesSection = document.querySelector(".propiedades");
  const totalspan = document.querySelector("#Propiedades Span");

  btn.addEventListener("click", () => {
      const [
        {value : cuartos},
        {value :  metrosMin },
        {value : metrosMax },

      ] =inputs;
      if (inputs.filter(({value}) => !value).length) {
        alert("faltan datos")
        return false;

      }
      const propiedades = propiedadesJSON.filter(
        ({rooms, m}) => rooms >= cuartos && m >= metrosMin && m <= metrosMax
      );
      fillPropiedades(propiedades);
    });

  const fillPropiedades = (propiedades = propiedadesJSON) => {
    clearPropiedades();
    totalspan.innerHTML = propiedades.length;
    propiedades.forEach((propiedad) => {
      const propiedadesTemplate =  prepareTemplatePropiedad(propiedades);
      propiedadesSection.innerHTML += propiedadesTemplate;
    })
  };

  // const propiedadesTemplate =({

  // })
  // return ""