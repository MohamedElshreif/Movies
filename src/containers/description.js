import React from 'react';
import Description from '../components/description';
import { v4 as uuidv4 } from 'uuid';

export default function DescriptionContiner({ children, data, ...restProps }) {
  const { photo, desc, info, social } = data;
  return (
    <Description {...restProps}>
      <Description.Content>
        <Description.Image src={photo} />
        <Description.Info>
          <Description.Group>
            <Description.Title>Storyline</Description.Title>
            <Description.Desc>{desc}</Description.Desc>
          </Description.Group>
          <Description.Table>
            <tbody>
              {info &&
                Object.keys(info).map((key) => {
                  return (
                    <tr key={uuidv4()}>
                      <td>{key}</td>
                      <td>
                        {Array.isArray(info[key])
                          ? info[key].join(', ')
                          : info[key]}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Description.Table>
          <Description.Social social={social} />
        </Description.Info>
      </Description.Content>
      {children}
    </Description>
  );
}
