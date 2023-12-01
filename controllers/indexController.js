const productos=[
    {
        id:1,
        nombre:"carpaccio fresco",
        descripcion:"Entrada Carpaccio de salmón con cítricos",
        precio:65.50,
        imagen:'Carpaccio-de-salmon.jpg'
    },
    {
        id:2,
        nombre:"Risotto de berenjena",
        descripcion:"Entrada Carpaccio de salmón con cítricos",
        precio:65.50,
        imagen:'Risotto-berenjena-queso-cabra.jpg'
    },
    {
        id:3,
        nombre:"Mousse de arroz",
        descripcion:"Entrada Carpaccio de salmón con cítricos",
        precio:65.50,
        imagen:'Mousse-de-arroz-con-leche.jpg'
    },
    {
        id:4,
        nombre:"Espárragos blancos",
        descripcion:"Entrada Carpaccio de salmón con cítricos",
        precio:65.50,
        imagen:'esparragos.png'
    },
    {
        id:5,
        nombre:"Milanesa con Pure",
        descripcion:"",
        precio:65.50,
        imagen:'milanesa-con-pure.jpg'
    }
]
const indexController={
    home:(req,res)=>{
        res.render('home',{title:"Pimienta y Sal",productos})
    },
    detalle: (req,res)=>{
        const id=req.params.id;
        const producto= productos.find(producto=>producto.id == id)

        res.render('detalle',{title:producto.nombre,producto});
    }
}
module.exports=indexController;