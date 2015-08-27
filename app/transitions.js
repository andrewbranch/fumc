export default function() {
  this.transition(
    this.childOf('.pdf-list'),
    this.use('explode', {
      matchBy: 'data-client-id',
      use: ['flyTo', { duration: 300, easing: 'ease-out' }]
    })
  );
}
