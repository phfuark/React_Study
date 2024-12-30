import {Forms} from '@/components/Forms'
import {Person} from '@/components/Person'
import {Card} from '@/components/Card';
import {peopleList} from '@/data/people';

const Page = () => {

  const List = peopleList.map(person=> <li>Nome: {person.name} - ID: {person.id} - Profession: {person.profession}</li>)

  return(
    <div className="text-2xl pl-4">
      <h1 className="font-bold">Primeira página com React!</h1>
      <Forms/>
      <Person
        name='Elon Musk'
        urlPhoto='https://s2-g1.glbimg.com/CVqadfoNh0OBgg4mQNtwE2_wofg=/0x0:1944x1259/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/e/6/9JYLPXRpSBYp095qs5AA/2024-12-05t163819z-1477045286-rc24jbawcvc6-rtrmadp-3-usa-trump-congress-efficiency.jpg'
        roles={['CEO da Tesla', 'CEO da SpaceX']}
      />
      <Person
        name='Jeff Bezos'
        urlPhoto='https://veja.abril.com.br/wp-content/uploads/2024/12/jeffbezos.jpg?crop=1&resize=1212,909'
        roles={['Ex-CEO da Amazon', 'CEO da Blue Origin']}
      />
      <Person
        name='phfuark'
        roles={['Dono deste repositório', 'Aprendiz']}
      />

      <Card phase='Sim' author='Não'/>

      <ul>
        {List}
      </ul>
    </div>
  );
}

export default Page;