export default function KeeperRow ({ keeper, onSelectKeeper }) {
    return (
      <tr onClick={() => onSelectKeeper(keeper)}>
        <td>{keeper.e_id}</td>
        <td>{keeper.name}</td>
      </tr>
    );
  }; 