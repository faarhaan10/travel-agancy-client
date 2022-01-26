import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Payment = () => {
    return (
        <Box>
            <Container>
                <Typography
                    variant="h3"
                    component="div"

                    sx={{
                        fontSize: { md: 40, sm: 30, xs: 25 },
                        mt: 5, textAlign: 'center'
                    }}
                >
                    Coming soon!
                </Typography>
            </Container>

        </Box>
    );
};

export default Payment;