export const studio = {
  name: 'Suzzy Alves Fotografia',
  phone: '+55 (11) 99564-9843',
  instagram: 'fotografia_suzzyalves',
  street: 'Rua Ângelo Roberto Orsomarso, 23',
  neighborhood: 'Jardim Nova Cidade',
  city: 'Guarulhos–SP',
  hours: 'De quarta a domingo, das 9h às 18h',
  latitude: -23.4460749,
  longitude: -46.407651,
};

export const instagramUrl = `https://www.instagram.com/${studio.instagram}/`;

export function whatsappLink(category = '', offer = false) {
  const session = category ? `um ensaio de ${category}` : 'um ensaio';
  const message = offer
    ? `Olá, Suzzy! Vi a oferta no seu site e gostaria de agendar ${session} com as 5 fotos extras.`
    : `Olá, Suzzy! Gostaria de agendar ${session}. Quais datas estão disponíveis?`;

  return `https://wa.me/${studio.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
