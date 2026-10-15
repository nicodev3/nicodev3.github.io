// Native Sätteri transform: table regions are emitted at build time, not in the browser.
export default function accessibleTables() {
  return {
    name: 'accessible-tables',
    element: {
      filter: ['table'],
      visit(node) {
        return {
          type: 'element',
          tagName: 'div',
          properties: {
            className: ['article-table-scroll'],
            tabIndex: 0,
            role: 'region',
            ariaLabel: 'Tableau, défilement horizontal possible',
          },
          children: [node],
        };
      },
    },
  };
}
