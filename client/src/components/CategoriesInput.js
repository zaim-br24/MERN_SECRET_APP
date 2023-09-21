import React from 'react';
import Wrapper from '../assets/Styles/CategoriesInputWrapper';
const categories = [
  'Technology',
  'Health and Wellness',
  'Food and Cooking',
  'Travel and Adventure',
  'Business and Finance',
  'Fitness and Exercise',
  'Fashion and Style',
  'Art and Design',
  'Science and Nature',
  'Music and Entertainment',
  'Home and DIY',
  'Education and Learning',
  'Sports and Recreation',
  'Books and Literature',
  'Beauty and Skincare',
  'Gaming and Esports',
  'Photography',
  'Parenting and Family',
  'Automotive',
  'Pets and Animals',
];
const CategoriesInput = ({handleCategoryChange, selectedCategory})=> {
    
      return (
        <Wrapper className="category-input-container">
          <select
            className="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Wrapper>
      );
}

export default CategoriesInput;
