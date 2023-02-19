import { wrapFetch } from '../../util/api';

// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise<{ data: number }>((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

export const fetchCount = async (amount = 1) => {
  try {
    const data = await wrapFetch<{ data: number }>('members');
    return data;
  } catch (error) {
    return { data: amount };
  }
};
