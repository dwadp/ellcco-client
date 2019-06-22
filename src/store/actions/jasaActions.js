import JasaService from '../../lib/services/jasaService';

const SAVE_JASA = 'SAVE_JASA';

const saveDataJasa = jasa => ({
  type: SAVE_JASA,
  data: jasa,
});

const fetchAllDataJasa = () => (async (dispatch) => {
  try {
    const jasa = await JasaService.all();

    dispatch(saveDataJasa(jasa));
  } catch (error) {
    throw error;
  }
});

export {
  SAVE_JASA,
  saveDataJasa,
  fetchAllDataJasa,
};
