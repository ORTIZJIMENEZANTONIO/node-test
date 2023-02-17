export const stationsQry = (id) => `
select 
  s.cre_id as station_id,
  s.name as station,
  sc.distance,
  p.product,
  p.value,
  b.name as brand
from 
  stations_brands sb, 
  brands b,
  stations s,
  stations_competitors sc,
  prices p
where 
  b.id = sb.id_brand and 
  s.cre_id = sb.cre_id and
  s.cre_id = sc.cre_id and
  s.cre_id = p.cre_id 
  # s.cre_id = ${id}
limit 100;
`;
