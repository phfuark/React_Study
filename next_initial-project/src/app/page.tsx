import {Forms} from '@/components/Forms'
import {Person} from '@/components/Person'

const Page = () => {
  return(
    <div className="text-2xl pl-4">
      <h1 className="font-bold">Primeira página com React!</h1>
      <Forms/>
      <Person/>
    </div>
  );
}

export default Page;