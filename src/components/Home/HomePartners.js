const partners = [
  {
    name: 'Pipefy',
    imgUrl: '/images/parceiros/pipefy.png',
    url: 'https://www.pipefy.com/pt-br/',
  },
  {
    name: "The Fejas Factory",
    imgUrl: "/images/parceiros/fejas.png",
    url: "https://www.instagram.com/thefejasfactory/",
  },
  {
    name: 'moochacho',
    imgUrl: '/images/parceiros/moochacho.png',
    url: 'https://www.moochacho.com.br/',
  },
  {
    name: 'coxitos',
    imgUrl: '/images/parceiros/coxitos.png',
    url: 'https://www.instagram.com/coxitosoficial/',
  },
  {
    name: 'bolo das amigas',
    imgUrl: '/images/parceiros/bolo-das-amigas.png',
    url: 'https://www.instagram.com/bolodasamigasfloripa/',
  }
]


function HomePartners() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-50" />
        </div>
        <div className="relative px-4 ">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-1">
            <span className="block text-blue-900 text-12xl  mb-1">
              Empresas parceiras
            </span>
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="relative px-4 py-2 flex">
            <ul className="flex flex-col lg:flex-row py-3 justify-center bg-white rounded-xl items-center">
              {partners.map((partner)=>(
                <li key={partner.name}>
                  <div className="px-8 flex">
                    <a href={partner.url} target="_blank" className="flex items-center py-4">
                      <img
                        className="max-h-20 lg:max-h-48"
                        src={partner.imgUrl}
                        alt={partner.name}
                      />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePartners;
