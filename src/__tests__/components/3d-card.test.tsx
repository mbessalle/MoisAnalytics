import React from 'react';
import { render } from '@testing-library/react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

describe('3D Card Components', () => {
  it('renders the CardContainer with content', () => {
    const { getByText } = render(
      <CardContainer>
        <div>Test Content</div>
      </CardContainer>
    );
    
    expect(getByText('Test Content')).toBeInTheDocument();
  });
  
  it('renders the CardBody with content', () => {
    const { getByText } = render(
      <CardBody>
        <div>Card Body Content</div>
      </CardBody>
    );
    
    expect(getByText('Card Body Content')).toBeInTheDocument();
  });
  
  it('renders the CardItem with content', () => {
    const { getByText } = render(
      <CardContainer>
        <CardBody>
          <CardItem>
            Card Item Content
          </CardItem>
        </CardBody>
      </CardContainer>
    );
    
    expect(getByText('Card Item Content')).toBeInTheDocument();
  });
  
  it('applies custom className to CardContainer', () => {
    const { container } = render(
      <CardContainer className="custom-class">
        <div>Test</div>
      </CardContainer>
    );
    
    expect(container.querySelector('.custom-class')).toBeTruthy();
  });
  
  it('applies custom className to CardBody', () => {
    const { container } = render(
      <CardBody className="custom-body-class">
        <div>Test</div>
      </CardBody>
    );
    
    expect(container.querySelector('.custom-body-class')).toBeTruthy();
  });
});
