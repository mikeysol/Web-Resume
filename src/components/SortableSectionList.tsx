import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useResume } from '../context/ResumeContext'
import type { ResumeSection } from '../types'

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function SortableItem({ section }: { section: ResumeSection }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: section.sectId,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li ref={setNodeRef} style={style} className="sortable-item" {...attributes} {...listeners}>
      <div className="sortable-item-content">
        <b>{capitalize(section.sectId)}</b>
        <img src="/images/draggable.png" height="21" width="21" alt="drag handle" />
      </div>
    </li>
  )
}

export default function SortableSectionList() {
  const { sections, setSections } = useResume()
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.sectId === active.id)
      const newIndex = sections.findIndex((s) => s.sectId === over.id)
      setSections(arrayMove(sections, oldIndex, newIndex))
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={sections.map((s) => s.sectId)} strategy={verticalListSortingStrategy}>
        <ul className="section-list">
          {sections.map((sect) => (
            <SortableItem key={sect.sectId} section={sect} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  )
}
