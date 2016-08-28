export const fetchBenches = function(bounds, success){
  $.ajax({
    method: 'GET' ,
    url: '/api/benches',
    data: { bounds },
    success,
    error: () => console.log('error')
  });
};
