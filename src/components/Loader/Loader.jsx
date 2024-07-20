import { FallingLines } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.loaderBox}>
        <FallingLines color="#F6E6CB" height={200} width={200} />
      </div>
    </div>
  );
};

export default Loader;
