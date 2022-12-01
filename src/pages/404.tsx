import SC from '@emotion/styled';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {Page} from '../components';
import {Icon} from '../components/icon';
import {maxDevice} from '../styles';

const Title = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 72px;
  color: #1f2326;
  @media ${maxDevice.tablet} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${maxDevice.mobileL} {
    font-size: 30px;
    line-height: 36px;
  }
`;
const Text = SC.div`
  width: 560px;
  margin-top: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #22262A;
  @media ${maxDevice.tablet} {
    width: 370px;
    margin-top: 30px;
    font-size: 20px;
    line-height: 28px;
  }
  @media ${maxDevice.mobileL} {
    width: auto;
    margin-top: 30px;
    font-size: 16px;
    line-height: 20px;
  }
`;

const NotFound = SC(Icon)`
  @media ${maxDevice.mobileL} {
    width: 90%;
  }
`;
const Img = SC.div`
  display: flex;
  justify-content: flex-end;
`;

type Props = {
  // Add custom props here
}

const NotFoundPage = ( _props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  // const onToggleLanguageClick = (newLocale: string) => {
  //   const { pathname, asPath, query } = router
  //   router.push({ pathname, query }, asPath, { locale: newLocale })
  // };

  const changeTo = router.locale === 'ru' ? 'en' : 'ru';

  return (
    <Page>
      <div>
        <Title>{`Этой страницы \nне существует`}</Title>
        <Text>
          Вы перешли по неверной ссылке, либо эта страница была удалена.&nbsp;
          <Link rel="canonical" href="/" passHref>
            Начните с главной страницы
          </Link>
          <Link href="/" locale={changeTo}>
            <button>{t('change-locale', { changeTo })}</button>
          </Link>
          {/* alternative language change without using Link component
          <button onClick={() => onToggleLanguageClick(changeTo)}>
            {t('change-locale', { changeTo })}
          </button>
          */}
          {/* <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link> */}
        </Text>
      </div>
      <Img>
        <NotFound name="notFound" size="260" />
      </Img>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
  },
});

export default NotFoundPage;
