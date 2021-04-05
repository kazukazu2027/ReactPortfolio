import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from 'next/link';
import styled from 'styled-components';

const SpMenu = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Paper square>
            <STabs
                value={value}
                indicatorColor="parent"
                color="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Link href="/"><STab label="HOME" /></Link>
                <Link href="About"><STab label="ABOUT" /></Link>
                <Link href="Skills"><STab label="SKILL" /></Link>
                <Link href="Works"><STab label="WORK" /></Link>
                <Link href="Contact"><STab label="CONTACT" /></Link>
            </STabs>
        </Paper>
  );
}

export default SpMenu;  

const STabs = styled(Tabs)`
    width: 100%;
    background-color: #404b75;
    color: #fff;
    display: none !important;
    @media(max-width:600px){
        display: block !important;
    }
`;

const STab = styled(Tab)`
    width: 20%;
`;