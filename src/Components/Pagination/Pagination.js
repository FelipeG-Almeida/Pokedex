import { GlobalContext } from '../../Global/GlobalContext';
import { PaginationContainer } from './Style';
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';

export default function Pagination() {
	const { states, setters } = useContext(GlobalContext);

	function handlePagination(page) {
		if (page < 0 || page > 37) {
			return;
		} else {
			setters.setCurrentPage(page);
		}
	}

	function CustomButton (props) {
		return <Button size={"custom"} width="40px" height="40px" {...props}/>
	}

	if (states.type !== 'tudo') {
		return <PaginationContainer></PaginationContainer>;
	} else if (states.currentPage >= 4 && states.currentPage <= 34) {
		return (
			<PaginationContainer>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage - 1)}
				>
					&#60;
				</CustomButton>
				<CustomButton colorScheme={'blackAlpha'} isDisabled>
					...
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage - 2)}
				>
					{states.currentPage - 1}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage - 1)}
				>
					{states.currentPage}
				</CustomButton>
				<CustomButton
					colorScheme={'gray'}
					color={'black'}
					onClick={() => handlePagination(states.currentPage)}
				>
					{states.currentPage + 1}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage + 1)}
				>
					{states.currentPage + 2}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage + 2)}
				>
					{states.currentPage + 3}
				</CustomButton>
				<CustomButton colorScheme={'blackAlpha'} isDisabled>
					...
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage + 1)}
				>
					&#62;
				</CustomButton>
			</PaginationContainer>
		);
	} else if (states.currentPage > 34 && states.currentPage <= 37) {
		return (
			<PaginationContainer>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage - 1)}
				>
					&#60;
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(0)}
				>
					1
				</CustomButton>
				<CustomButton colorScheme={'blackAlpha'} isDisabled>
					...
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage - 3)}
				>
					{states.currentPage - 2}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage - 2)}
				>
					{states.currentPage - 1}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage - 1)}
				>
					{states.currentPage}
				</CustomButton>
				<CustomButton
					colorScheme={'gray'}
					color={'black'}
					onClick={() => handlePagination(states.currentPage)}
				>
					{states.currentPage + 1}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage + 1)}
				>
					&#62;
				</CustomButton>
			</PaginationContainer>
		);
	} else {
		return (
			<PaginationContainer>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage - 1)}
				>
					&#60;
				</CustomButton>
				<CustomButton
					colorScheme={'gray'}
					color={'black'}
					onClick={() => handlePagination(states.currentPage)}
				>
					{states.currentPage + 1}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage + 1)}
				>
					{states.currentPage + 2}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage + 2)}
				>
					{states.currentPage + 3}
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage + 3)}
				>
					{states.currentPage + 4}
				</CustomButton>
				<CustomButton colorScheme={'blackAlpha'} isDisabled>
					...
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(37)}
				>
					38
				</CustomButton>
				<CustomButton
					colorScheme={'blackAlpha'}
					onClick={() => handlePagination(states.currentPage + 1)}
				>
					&#62;
				</CustomButton>
			</PaginationContainer>
		);
	}
}
