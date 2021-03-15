import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, fetchChangeStatusToAPI   } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changedTableStatus: (row) => dispatch(fetchChangeStatusToAPI(row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
