export const studio = {
  name: 'Suzzy Alves Fotografia',
  phone: '5511995649843',
  street: 'Rua Ângelo Roberto Orsomarso, 23',
  neighborhood: 'Jardim Nova Cidade',
  city: 'Guarulhos–SP',
  hours: 'De quarta a domingo, das 9h às 18h',
  latitude: -23.4460749,
  longitude: -46.407651,
};

export function whatsappLink(category = '', offer = false) {
  const session = category ? `um ensaio de ${category}` : 'um ensaio';
  const message = offer
    ? `Olá, Suzzy! Vi a oferta no seu site e quero pedir os 5% de desconto para agendar ${session}.`
    : `Olá, Suzzy! Gostaria de agendar ${session}. Quais datas estão disponíveis?`;

  return `https://wa.me/${studio.phone}?text=${encodeURIComponent(message)}`;
}
