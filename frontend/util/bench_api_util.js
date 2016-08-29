export const fetchBenches = function(bounds, success){
  $.ajax({
    method: 'GET' ,
    url: '/api/benches',
    data: { bounds },
    success,
    error: () => console.log('error')
  });
};

export const createBench = function(bench, success){
  $.ajax({
    method: 'POST' ,
    url: '/api/benches',
    data: {
      benches: {
        description: bench.description,
        seating: bench.seating,
        lat: bench.lat,
        lng: bench.lng
      }
    },
    success,
    error: () => console.log('error')
  });
};
