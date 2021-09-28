import Styles from './layout.module.css';

export default function Layout({ children }) {
    return <div className={ Styles.container}>{children}</div>
}