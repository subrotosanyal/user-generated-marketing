export const processCSVData = (csvData: string) => {
  const lines = csvData.trim().split('\n');

  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.replace(/['"]/g, ''));
    return {
      DateTime: values[0],
      als_en: parseInt(values[1]) || 0,
      als_de: parseInt(values[2]) || 0,
      als_fr: parseInt(values[3]) || 0,
      icebucket: parseInt(values[4]) || 0
    };
  });
};