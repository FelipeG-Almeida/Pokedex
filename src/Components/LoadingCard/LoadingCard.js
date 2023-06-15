import { Spinner } from '@chakra-ui/react';
import { Card } from './Style';

export default function LoadingCard() {
    return [...Array(27)].map((value, index) => {
        return (
            <Card key={index}>
                <Spinner
                    thickness="8px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="red.500"
                    size="xl"
                />
            </Card>
        );
    });
}
