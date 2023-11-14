function calculate(){
  // 1. init & validate
  const shape = input.get('shape').raw();
  const unit = input.get('units').raw();
  const unitCoeff = {
    'meters (m)': 1,
    'inches (in)': 0.0254**3,
    'feets (ft)': 0.3048**3,
    'yards (yd)': 0.9144**3,
    'millimeters (mm)': 1e-3**3,
    'centimeters (cm)': 1e-2**3
  };
  const quantity = input.get('quantity').natural().val();
  const price = input.get('price').optional().positive().val();
  const perCubic = input.get('per_cubic').raw();
  const priceCoeff = {
    'meter (m³)': 1, 
    'yard (yd³)': 0.9144**3, 
    'foot (ft³)': 0.3048**3
  };
  if(!input.valid()) return;

  // 2. calculate
  let vol = 0; // m³
  const get = id => input.get(id).positive().val();
  switch(shape){
    case 'Square Slab':{
      const l = get('length_a');
      const d = get('depth_a');
      const w = get('width_a');
      if(!input.valid()) return;
      vol = calc(`${l}*${d}*${w}`);
    }break;
    case 'Round Slab':{
      const w = get('width_b');
      const d = get('depth_b');
      if(!input.valid()) return;
      vol = calc(`pi*${w}^2/4*${d}`);
    }break;
    case 'Wall':{
      const l = get('length_c');
      const h = get('height_c');
      const w = get('width_c');
      if(!input.valid()) return;
      vol = calc(`${l}*${h}*${w}`);
    }break;
    case 'Footer':{
      const l = get('length_d');
      const h = get('height_d');
      const w = get('width_d');
      if(!input.valid()) return;
      vol = calc(`${l}*${h}*${w}`);
    }break;
    case 'Square Column':{
      const l = get('length_e');
      const h = get('height_e');
      const w = get('width_e');
      if(!input.valid()) return;
      vol = calc(`${l}*${h}*${w}`);
    }break;
    case 'Round Column':{
      const w = get('width_f');
      const h = get('height_f');
      if(!input.valid()) return;
      vol = calc(`pi*${w}^2/4*${h}`);
    }break;
    case 'Steps':{
      const w = get('width_g');
      const h = get('height_g');
      const d = get('depth_g');
      const r = get('run_g');
      const s = input.get('steps_g').natural().val();
      if(!input.valid()) return;
      vol = calc(`${w}*${h}*${s}*(${d}+${r}*(${s}-1)/2)`);
    }break;
    case 'Curb & Gutter':{
      const w = get('width_h');
      const h = get('height_h');
      const d = get('depth_h');
      const c = get('curb_h');
      const g = get('gutter_h');
      if(!input.valid()) return;
      vol = calc(`${w}*(${h}*(${g}+${d})+${c}*${d})`);
    }break;
  }
  vol*= quantity*unitCoeff[unit];

  let cost = 0;
  if(price != null){
    cost = calc(`${vol}*${price}/${priceCoeff[perCubic]}`);
  }

  // 3. output
  _('meters_volume').innerHTML = calc(`${vol}/${unitCoeff['meters (m)']}`);
  _('yards_volume').innerHTML = calc(`${vol}/${unitCoeff['yards (yd)']}`);
  _('feet_volume').innerHTML = calc(`${vol}/${unitCoeff['feets (ft)']}`);
  _('cost_row').classList[!price?'add':'remove']('hidden');
  _('cost').innerHTML = cost;
}

window.addEventListener('load', () => math.config({number:'BigNumber', precision: 9}));