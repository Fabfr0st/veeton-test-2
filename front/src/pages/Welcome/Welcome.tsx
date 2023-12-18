import type { FC } from 'react';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';


export type Todo = {
  todo_id: number
  todo_text: string
  todo_done: boolean
}
// enlever le store
const Welcome: FC = () => {

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={'column'}>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
