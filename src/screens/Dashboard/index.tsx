import React, { useCallback, useEffect, useState } from 'react';

import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HistoryCard from '../../components/HistoryCard';

import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
} from './styles';
import { theme } from '../../global/styles/theme';
import { useFocusEffect } from '@react-navigation/native';


interface DashboardProps {
  date: string;
  name: string;
  amount: string;
  category: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  color: string;
  percent: string;
  formattedTotal: string;
}

function Dashboard() {
  const [totalByCategories, setTotalByCategory] = useState<CategoryData[]>([]);

  async function loadData() {
    const dataKey = '@iFinances:transactions';

    const response = await AsyncStorage.getItem(dataKey);
    const formattedResponse = response ? JSON.parse(response) : [];

    const expenses = formattedResponse
      .filter((expense: DashboardProps) => expense.category);

    const totalExpenses = expenses
      .reduce((acc: number, expense: DashboardProps) => {
        return acc + Number(expense.amount);
      }, 0);

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expenses.forEach((expense: DashboardProps) => {
        if (expense.category === category.key) {
          categorySum += Number(expense.amount);
        }
      })

      if (categorySum > 0) {
        const formattedTotal = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })

        const percent = `${(categorySum / totalExpenses * 100).toFixed(0)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          formattedTotal,
          percent,
        });
      }
    })

    setTotalByCategory(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>

      <Content>
        <ChartContainer>
          <VictoryPie
            data={totalByCategories}
            x="percent"
            y="total"
            colorScale={totalByCategories.map(category => category.color)}
            labelRadius={70}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: 'bold',
                fill: theme.colors.shape,
              },
            }}
          />
        </ChartContainer>

        {totalByCategories.map(item => (
          <HistoryCard
            key={item.key}
            title={item.name}
            color={item.color}
            amount={item.formattedTotal}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
