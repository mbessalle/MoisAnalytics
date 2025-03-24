import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

describe('Card Component', () => {
  it('renders Card with all subcomponents correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
    
    // Check if all components are rendered
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('renders Card with custom className', () => {
    render(
      <Card className="custom-class" data-testid="card">
        <CardContent>Card with custom class</CardContent>
      </Card>
    );
    
    // Use data-testid to directly target the Card component
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-class', { exact: false });
  });

  it('renders CardHeader with custom className', () => {
    render(
      <Card>
        <CardHeader className="custom-header">
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
      </Card>
    );
    
    const header = screen.getByText('Card Title').closest('div');
    expect(header).toHaveClass('custom-header', { exact: false });
  });

  it('renders CardFooter with custom className', () => {
    render(
      <Card>
        <CardFooter className="custom-footer">
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
    
    const footer = screen.getByText('Card Footer').closest('div');
    expect(footer).toHaveClass('custom-footer', { exact: false });
  });

  it('renders CardTitle with custom className', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle className="custom-title">Card Title</CardTitle>
        </CardHeader>
      </Card>
    );
    
    expect(screen.getByText('Card Title')).toHaveClass('custom-title', { exact: false });
  });

  it('renders CardDescription with custom className', () => {
    render(
      <Card>
        <CardHeader>
          <CardDescription className="custom-description">Card Description</CardDescription>
        </CardHeader>
      </Card>
    );
    
    expect(screen.getByText('Card Description')).toHaveClass('custom-description', { exact: false });
  });

  it('renders CardContent with custom className', () => {
    render(
      <Card>
        <CardContent className="custom-content">
          <p>Card Content</p>
        </CardContent>
      </Card>
    );
    
    const content = screen.getByText('Card Content').closest('div');
    expect(content).toHaveClass('custom-content', { exact: false });
  });
});
