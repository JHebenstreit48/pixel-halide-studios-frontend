import styles from '@/components/layout/pageWrapper/pageWrapper.module.scss';

type PageWrapperProps = {
  children: React.ReactNode;
  title?: string;
};

export default function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <div className={styles.pageWrapper}>
      {title && (
        <div className={styles.pageWrapper__header}>
          <h1 className={styles.pageWrapper__title}>{title}</h1>
        </div>
      )}
      <div className={styles.pageWrapper__content}>
        {children}
      </div>
    </div>
  );
}