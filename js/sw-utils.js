// Guarda en el caché dinámico
function actualizaCacheDinamico ( dynamicCache, req, res ) {

        if ( res.ok ) {
            return caches.open ( dynamicCache ).then( cache => {
                cache.put ( req, res.clone() );
                return res.clone();
            });
        } else {
            // Ya falló la red y la caché
            return res;
        }
}