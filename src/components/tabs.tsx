import { useParams } from 'react-router-dom';
import cn from 'classnames';

export const Tabs = () => {
  const { tabsId } = useParams();
  const tabs = {
    'tab-1': 'Some text 1',
    'tab-2': 'Some text 2',
    'tab-3': 'Some text 3',
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className={cn({ 'is-active': tabsId === 'tab-1' })}>
            <a href="#/tabs/tab-1">Tab 1</a>
          </li>
          <li data-cy="Tab" className={cn({ 'is-active': tabsId === 'tab-2' })}>
            <a href="#/tabs/tab-2">Tab 2</a>
          </li>
          <li data-cy="Tab" className={cn({ 'is-active': tabsId === 'tab-3' })}>
            <a href="#/tabs/tab-3">Tab 3</a>
          </li>
        </ul>
      </div>

      <div className="block tab-content" data-cy="TabContent">
        {!Object.keys(tabs).includes(tabsId as string)
          ? 'Please select a tab'
          : tabs[tabsId as keyof typeof tabs]}
      </div>
    </>
  );
};
