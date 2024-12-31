import {Forms} from '@/components/Forms'
import {Person} from '@/components/Person'
import {Card} from '@/components/Card';
import {peopleList} from '@/data/peopleList';

const Page = () => {

  const odd = peopleList.filter(person=> (person.id % 2) == 1);

  const List = peopleList.map(person=> <li>Nome: {person.name} - ID: {person.id} - Profession: {person.profession}</li>)

  return(
    <div className="text-xl pl-4 flex gap-2 justify-between">
      <div>
        <p className='text-4xl'>Aula 1, 2, 3</p>
        <Forms/>
      </div>

      <div>
        <p className='text-4xl'>Aula 5, 6</p>
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
      </div>

      <div>
        <p className='text-4xl'>Aula 7</p>
        <Card phase='Sim' author='Não'/>
      </div>

      <div>
        <p className='text-4xl'>Aula 8, 9, 10, 11, 12</p>
        <ul>
            {List}
        </ul>

          <div>
            <h2>Pessoas que tem o ID ímpar</h2>
            <ul>
              {peopleList.map(person=> 
                <li key={person.id}>{person.name}</li>
              )}
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Page;